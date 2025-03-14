for-of15.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 200,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 133,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 133,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 78,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "decorators": [],
              "name": "next",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 78,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 78,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 72,
                    "argument": {
                      "type": "Literal",
                      "start": 69,
                      "end": 71,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 83,
            "end": 131,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 84,
              "end": 99,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 84,
                "end": 90,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 91,
                "end": 99,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 131,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 131,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 113,
                    "end": 125,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 120,
                      "end": 124
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 38,
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 148,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 148,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 148,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 142,
                "end": 148
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 150,
      "end": 185,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 182,
        "end": 185,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 155,
        "end": 156,
        "decorators": [],
        "name": "v",
        "optional": false
      },
      "right": {
        "type": "NewExpression",
        "start": 160,
        "end": 180,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 164,
          "end": 180,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
