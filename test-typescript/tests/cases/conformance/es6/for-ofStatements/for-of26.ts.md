for-of26.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 185,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 132,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 132,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 77,
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
              "end": 77,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 77,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 71,
                    "argument": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "x",
                      "optional": false
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
            "start": 82,
            "end": 130,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 83,
              "end": 98,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 83,
                "end": 89,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 90,
                "end": 98,
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
              "start": 99,
              "end": 130,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 102,
                "end": 130,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 112,
                    "end": 124,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 119,
                      "end": 123
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
      "start": 134,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 144,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 144,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 141,
                "end": 144
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
      "start": 146,
      "end": 185,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 182,
        "end": 185,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 151,
        "end": 156,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 155,
            "end": 156,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
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
