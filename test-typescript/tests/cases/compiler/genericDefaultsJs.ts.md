__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 217,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 33,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f0",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 28,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 28,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 27,
              "end": 28,
              "typeName": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 29,
        "end": 32,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 31,
          "end": 32,
          "typeName": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
      "type": "TSDeclareFunction",
      "start": 34,
      "end": 84,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 53,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 69,
          "end": 74,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 74,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 73,
              "end": 74,
              "typeName": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 75,
        "end": 83,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 77,
          "end": 83,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 78,
              "end": 79,
              "typeName": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 81,
              "end": 82,
              "typeName": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 53,
        "end": 68,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 54,
            "end": 55,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 57,
            "end": 67,
            "const": false,
            "default": {
              "type": "TSNumberKeyword",
              "start": 61,
              "end": 67
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 142,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 142,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 111,
            "end": 116,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
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
              "start": 112,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 115,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 140,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 132,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 132,
              "end": 140,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 133,
                  "end": 138,
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 135,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 137,
                      "end": 138,
                      "typeName": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
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
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 101,
        "decorators": [],
        "name": "C0",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 101,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 102,
            "end": 103,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
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
      "type": "ClassDeclaration",
      "start": 143,
      "end": 217,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 175,
        "end": 217,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 181,
            "end": 191,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
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
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 184,
                "end": 190,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 185,
                    "end": 186,
                    "typeName": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 186,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 188,
                    "end": 189,
                    "typeName": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 196,
            "end": 215,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 207,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 207,
              "end": 215,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 208,
                  "end": 213,
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 210,
                    "end": 213,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 212,
                      "end": 213,
                      "typeName": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 213,
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
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 159,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 159,
        "end": 174,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 160,
            "end": 161,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 163,
            "end": 173,
            "const": false,
            "default": {
              "type": "TSNumberKeyword",
              "start": 167,
              "end": 173
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
