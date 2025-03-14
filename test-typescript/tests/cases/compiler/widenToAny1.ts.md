__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 65,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 65,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 46,
            "end": 63,
            "argument": {
              "type": "Identifier",
              "start": 53,
              "end": 62,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 35,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 35,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 21,
              "end": 35,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 23,
                  "end": 28,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 27,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 26,
                      "end": 27,
                      "typeName": {
                        "type": "Identifier",
                        "start": 26,
                        "end": 27,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 29,
                  "end": 33,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 33,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 32,
                      "end": 33,
                      "typeName": {
                        "type": "Identifier",
                        "start": 32,
                        "end": 33,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 36,
        "end": 39,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 38,
          "end": 39,
          "typeName": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 80,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 80,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 74,
                "end": 80
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 83,
            "end": 115,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 88,
                "end": 114,
                "properties": [
                  {
                    "type": "Property",
                    "start": 90,
                    "end": 102,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 91,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 102,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 104,
                    "end": 112,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 107,
                      "end": 112,
                      "raw": "\"def\"",
                      "value": "def"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
