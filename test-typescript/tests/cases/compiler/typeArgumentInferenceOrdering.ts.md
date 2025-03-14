__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 214,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 21,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 21,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 19,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 18,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 17,
                "end": 18,
                "typeName": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 18,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 23,
      "end": 52,
      "body": {
        "type": "TSInterfaceBody",
        "start": 35,
        "end": 52,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 41,
            "end": 50,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 49,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 49,
                  "decorators": [],
                  "name": "Goo",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 54,
      "end": 86,
      "body": {
        "type": "TSInterfaceBody",
        "start": 68,
        "end": 86,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 74,
            "end": 84,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 67,
        "decorators": [],
        "name": "Goo",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 135,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 120,
        "end": 135,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 122,
            "end": 133,
            "argument": {
              "type": "Literal",
              "start": 129,
              "end": 133,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 104,
          "end": 115,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 105,
            "end": 115,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 107,
              "end": 115,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 109,
                  "end": 113,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 110,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 112,
                      "end": 113,
                      "typeName": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 113,
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
        "start": 116,
        "end": 119,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 118,
          "end": 119,
          "typeName": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 100,
        "end": 103,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 101,
            "end": 102,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
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
      "start": 136,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 158,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 144,
            "end": 158,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 144,
              "end": 156,
              "arguments": [
                {
                  "type": "NewExpression",
                  "start": 148,
                  "end": 155,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 153,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 144,
                "end": 147,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "x",
              "optional": false
            }
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
