__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 38,
        "name": "MyStringIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 133,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 78,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 78,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 83,
            "end": 131,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 84,
              "end": 99,
              "object": {
                "type": "Identifier",
                "start": 84,
                "end": 90,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 91,
                "end": 99,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 131,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 148,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 148,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 142,
                "end": 148
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 150,
      "end": 185,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 155,
        "end": 156,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "NewExpression",
        "start": 160,
        "end": 180,
        "callee": {
          "type": "Identifier",
          "start": 164,
          "end": 180,
          "name": "MyStringIterator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 182,
        "end": 185,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
