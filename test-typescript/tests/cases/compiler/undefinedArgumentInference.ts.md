__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 116,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 66,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 66,
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
      "start": 68,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 74,
            "decorators": [],
            "name": "z1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 77,
            "end": 113,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 82,
                "end": 112,
                "properties": [
                  {
                    "type": "Property",
                    "start": 84,
                    "end": 96,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
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
                      "start": 87,
                      "end": 96,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 98,
                    "end": 110,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 99,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 110,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 77,
              "end": 81,
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
