__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 19,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 19,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 20,
      "end": 93,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 93,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 91,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 55,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 91,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 91,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 77,
                    "end": 85,
                    "expression": {
                      "type": "CallExpression",
                      "start": 77,
                      "end": 84,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 77,
                        "end": 82
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 65,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 59,
                      "end": 65
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 111,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 103,
                "end": 111,
                "exprName": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 111,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
