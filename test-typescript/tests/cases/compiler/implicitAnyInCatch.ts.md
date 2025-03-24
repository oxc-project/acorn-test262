__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 204,
  "body": [
    {
      "type": "TryStatement",
      "start": 31,
      "end": 98,
      "block": {
        "type": "BlockStatement",
        "start": 35,
        "end": 38,
        "body": []
      },
      "finalizer": null,
      "handler": {
        "type": "CatchClause",
        "start": 39,
        "end": 98,
        "body": {
          "type": "BlockStatement",
          "start": 53,
          "end": 98,
          "body": [
            {
              "type": "IfStatement",
              "start": 59,
              "end": 96,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 93,
                "end": 96,
                "body": []
              },
              "test": {
                "type": "BinaryExpression",
                "start": 63,
                "end": 91,
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "start": 63,
                  "end": 75,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 68,
                    "decorators": [],
                    "name": "error",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 75,
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "UnaryExpression",
                  "start": 80,
                  "end": 91,
                  "argument": {
                    "type": "Literal",
                    "start": 81,
                    "end": 91,
                    "raw": "2147024809",
                    "value": 2147024809
                  },
                  "operator": "-",
                  "prefix": true
                }
              }
            }
          ]
        },
        "param": {
          "type": "Identifier",
          "start": 46,
          "end": 51,
          "decorators": [],
          "name": "error",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ForInStatement",
      "start": 99,
      "end": 124,
      "body": {
        "type": "BlockStatement",
        "start": 121,
        "end": 124,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 104,
        "end": 111,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 108,
            "end": 111,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 111,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "ThisExpression",
        "start": 115,
        "end": 119
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 126,
      "end": 203,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 134,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 140,
            "end": 201,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 151,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 151,
              "end": 201,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 154,
                "end": 201,
                "body": [
                  {
                    "type": "ForInStatement",
                    "start": 164,
                    "end": 195,
                    "body": {
                      "type": "BlockStatement",
                      "start": 184,
                      "end": 195,
                      "body": []
                    },
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 169,
                      "end": 174,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 173,
                          "end": 174,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 174,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": null
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "right": {
                      "type": "ThisExpression",
                      "start": 178,
                      "end": 182
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
