assignmentNonObjectTypeConstraints.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 24,
      "body": {
        "type": "TSEnumBody",
        "start": 13,
        "end": 24,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 16,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 18,
            "end": 19,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 21,
            "end": 22,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 96,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 96,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 69,
            "end": 87,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 73,
                "end": 86,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 82,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 74,
                    "end": 82,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 76,
                      "end": 82
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 57,
          "end": 61,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 61,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 60,
              "end": 61,
              "typeName": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 38,
        "end": 56,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 39,
            "end": 55,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 49,
              "end": 55
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
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
      "type": "ExpressionStatement",
      "start": 98,
      "end": 105,
      "expression": {
        "type": "CallExpression",
        "start": 98,
        "end": 104,
        "arguments": [
          {
            "type": "Literal",
            "start": 102,
            "end": 103,
            "raw": "5",
            "value": 5
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 98,
          "end": 101,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 115,
      "expression": {
        "type": "CallExpression",
        "start": 106,
        "end": 114,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 110,
            "end": 113,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 106,
          "end": 109,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 117,
      "end": 130,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 125,
        "end": 130,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 127,
            "end": 128,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 131,
      "end": 144,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 141,
            "end": 142,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 138,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 146,
      "end": 214,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 182,
        "end": 214,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 188,
            "end": 205,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 192,
                "end": 204,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 200,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 193,
                    "end": 200,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 195,
                      "end": 200,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 195,
                          "end": 196,
                          "typeName": {
                            "type": "Identifier",
                            "start": 195,
                            "end": 196,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 199,
                          "end": 200,
                          "typeName": {
                            "type": "Identifier",
                            "start": 199,
                            "end": 200,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 158,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 176,
          "end": 180,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 177,
            "end": 180,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 179,
              "end": 180,
              "typeName": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 158,
        "end": 175,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 159,
            "end": 174,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 169,
              "end": 174,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 169,
                  "end": 170,
                  "typeName": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 173,
                  "end": 174,
                  "typeName": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 174,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
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
      "type": "ExpressionStatement",
      "start": 216,
      "end": 227,
      "expression": {
        "type": "CallExpression",
        "start": 216,
        "end": 226,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 220,
            "end": 225,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 216,
          "end": 219,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 239,
      "expression": {
        "type": "CallExpression",
        "start": 228,
        "end": 238,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 232,
            "end": 237,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 228,
          "end": 231,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
