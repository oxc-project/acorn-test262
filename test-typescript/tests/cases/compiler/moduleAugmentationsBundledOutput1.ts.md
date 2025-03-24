__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 20,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 20,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Cls",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 286,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 24,
        "raw": "\"./m1\"",
        "value": "./m1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 78,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 26,
        "end": 77,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 26,
          "end": 50,
          "computed": false,
          "object": {
            "type": "TSTypeAssertion",
            "start": 27,
            "end": 45,
            "expression": {
              "type": "MemberExpression",
              "start": 32,
              "end": 45,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 32,
                "end": 35,
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 36,
                "end": 45,
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 28,
              "end": 31
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 50,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 53,
          "end": 77,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 64,
            "end": 77,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 66,
                "end": 75,
                "argument": {
                  "type": "Literal",
                  "start": 73,
                  "end": 74,
                  "raw": "1",
                  "value": 1
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
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 133,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 79,
        "end": 132,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 79,
          "end": 103,
          "computed": false,
          "object": {
            "type": "TSTypeAssertion",
            "start": 80,
            "end": 98,
            "expression": {
              "type": "MemberExpression",
              "start": 85,
              "end": 98,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 85,
                "end": 88,
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 89,
                "end": 98,
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 81,
              "end": 84
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 100,
            "end": 103,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 106,
          "end": 132,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 117,
            "end": 132,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 119,
                "end": 130,
                "argument": {
                  "type": "Literal",
                  "start": 126,
                  "end": 129,
                  "raw": "\"1\"",
                  "value": "1"
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 135,
      "end": 209,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 157,
        "end": 209,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 163,
            "end": 207,
            "body": {
              "type": "TSInterfaceBody",
              "start": 177,
              "end": 207,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 187,
                  "end": 201,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 190,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 192,
                    "end": 200,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 194,
                      "end": 200
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 150,
        "end": 156,
        "raw": "\"./m1\"",
        "value": "./m1"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 211,
      "end": 285,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 233,
        "end": 285,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 239,
            "end": 283,
            "body": {
              "type": "TSInterfaceBody",
              "start": 253,
              "end": 283,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 263,
                  "end": 277,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 266,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 268,
                    "end": 276,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 270,
                      "end": 276
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 249,
              "end": 252,
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 226,
        "end": 232,
        "raw": "\"./m1\"",
        "value": "./m1"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 29,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 16,
          "end": 29,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 18,
              "end": 27,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 19,
                "end": 27,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 21,
                  "end": 27
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
          "start": 13,
          "end": 15,
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 37,
        "end": 59,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 46,
          "end": 59,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 48,
              "end": 57,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 49,
                "end": 57,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 51,
                  "end": 57
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
          "start": 43,
          "end": 45,
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 323,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 24,
        "raw": "\"./m1\"",
        "value": "./m1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 26,
      "end": 54,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 47,
        "end": 53,
        "raw": "\"./m3\"",
        "value": "./m3"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 34,
          "end": 36,
          "imported": {
            "type": "Identifier",
            "start": 34,
            "end": 36,
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 36,
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 38,
          "end": 40,
          "imported": {
            "type": "Identifier",
            "start": 38,
            "end": 40,
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 38,
            "end": 40,
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 115,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 55,
        "end": 114,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 55,
          "end": 80,
          "computed": false,
          "object": {
            "type": "TSTypeAssertion",
            "start": 56,
            "end": 74,
            "expression": {
              "type": "MemberExpression",
              "start": 61,
              "end": 74,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 61,
                "end": 64,
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 65,
                "end": 74,
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 57,
              "end": 60
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 76,
            "end": 80,
            "decorators": [],
            "name": "baz1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 83,
          "end": 114,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 94,
            "end": 114,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 96,
                "end": 112,
                "argument": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 112,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
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
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 176,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 116,
        "end": 175,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 116,
          "end": 141,
          "computed": false,
          "object": {
            "type": "TSTypeAssertion",
            "start": 117,
            "end": 135,
            "expression": {
              "type": "MemberExpression",
              "start": 122,
              "end": 135,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 126,
                "end": 135,
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 118,
              "end": 121
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 137,
            "end": 141,
            "decorators": [],
            "name": "baz2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 144,
          "end": 175,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 155,
            "end": 175,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 157,
                "end": 173,
                "argument": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 173,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 178,
      "end": 249,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 200,
        "end": 249,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 206,
            "end": 247,
            "body": {
              "type": "TSInterfaceBody",
              "start": 220,
              "end": 247,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 230,
                  "end": 241,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 234,
                    "decorators": [],
                    "name": "baz1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 236,
                    "end": 240,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 238,
                      "end": 240,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 240,
                        "decorators": [],
                        "name": "C1",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 216,
              "end": 219,
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 193,
        "end": 199,
        "raw": "\"./m1\"",
        "value": "./m1"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 251,
      "end": 322,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 273,
        "end": 322,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 279,
            "end": 320,
            "body": {
              "type": "TSInterfaceBody",
              "start": 293,
              "end": 320,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 303,
                  "end": 314,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 307,
                    "decorators": [],
                    "name": "baz2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 309,
                    "end": 313,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 311,
                      "end": 313,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 311,
                        "end": 313,
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 289,
              "end": 292,
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 266,
        "end": 272,
        "raw": "\"./m1\"",
        "value": "./m1"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 167,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 26,
        "raw": "\"./m1\"",
        "value": "./m1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 28,
      "end": 40,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 39,
        "raw": "\"m2\"",
        "value": "m2"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 41,
      "end": 53,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 52,
        "raw": "\"m4\"",
        "value": "m4"
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 64,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 64,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 61,
                "end": 64,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 64,
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 90,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 66,
        "end": 89,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 66,
          "end": 87,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 66,
            "end": 73,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 66,
              "end": 71,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 68,
                "end": 71,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 87,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 113,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 91,
        "end": 112,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 91,
          "end": 110,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 91,
            "end": 98,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 91,
              "end": 96,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 93,
                "end": 96,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 99,
            "end": 110,
            "decorators": [],
            "name": "toLowerCase",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 141,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 114,
        "end": 140,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 114,
          "end": 138,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 114,
            "end": 124,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 114,
              "end": 122,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 114,
                "end": 120,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 120,
                  "decorators": [],
                  "name": "baz1",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 138,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 167,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 142,
        "end": 166,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 142,
          "end": 164,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 142,
            "end": 152,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 142,
              "end": 150,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 142,
                "end": 148,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 148,
                  "decorators": [],
                  "name": "baz2",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 153,
            "end": 164,
            "decorators": [],
            "name": "toLowerCase",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
