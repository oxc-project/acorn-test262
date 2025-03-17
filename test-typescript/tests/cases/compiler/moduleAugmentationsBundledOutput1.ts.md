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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 20,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "name": "Cls",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 20,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "Cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "Cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 24,
        "value": "./m1",
        "raw": "\"./m1\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 78,
      "expression": {
        "type": "AssignmentExpression",
        "start": 26,
        "end": 77,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 26,
          "end": 50,
          "object": {
            "type": "TSTypeAssertion",
            "start": 27,
            "end": 45,
            "expression": {
              "type": "MemberExpression",
              "start": 32,
              "end": 45,
              "object": {
                "type": "Identifier",
                "start": 32,
                "end": 35,
                "name": "Cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 36,
                "end": 45,
                "name": "prototype",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 28,
              "end": 31
            }
          },
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 50,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 53,
          "end": 77,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                  "value": 1,
                  "raw": "1"
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 133,
      "expression": {
        "type": "AssignmentExpression",
        "start": 79,
        "end": 132,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 79,
          "end": 103,
          "object": {
            "type": "TSTypeAssertion",
            "start": 80,
            "end": 98,
            "expression": {
              "type": "MemberExpression",
              "start": 85,
              "end": 98,
              "object": {
                "type": "Identifier",
                "start": 85,
                "end": 88,
                "name": "Cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 89,
                "end": 98,
                "name": "prototype",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 81,
              "end": 84
            }
          },
          "property": {
            "type": "Identifier",
            "start": 100,
            "end": 103,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 106,
          "end": 132,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                  "value": "1",
                  "raw": "\"1\""
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 135,
      "end": 209,
      "id": {
        "type": "Literal",
        "start": 150,
        "end": 156,
        "value": "./m1",
        "raw": "\"./m1\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 157,
        "end": 209,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 163,
            "end": 207,
            "id": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "name": "Cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 177,
              "end": 207,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 187,
                  "end": 201,
                  "key": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 190,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 211,
      "end": 285,
      "id": {
        "type": "Literal",
        "start": 226,
        "end": 232,
        "value": "./m1",
        "raw": "\"./m1\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 233,
        "end": 285,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 239,
            "end": 283,
            "id": {
              "type": "Identifier",
              "start": 249,
              "end": 252,
              "name": "Cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 253,
              "end": 283,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 263,
                  "end": 277,
                  "key": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 266,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 29,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 15,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 16,
          "end": 29,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 18,
              "end": 27,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 59,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 37,
        "end": 59,
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 45,
          "name": "C2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 46,
          "end": 59,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 48,
              "end": 57,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "Cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "Cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 24,
        "value": "./m1",
        "raw": "\"./m1\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 26,
      "end": 54,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 34,
          "end": 36,
          "imported": {
            "type": "Identifier",
            "start": 34,
            "end": 36,
            "name": "C1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 36,
            "name": "C1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 38,
          "end": 40,
          "imported": {
            "type": "Identifier",
            "start": 38,
            "end": 40,
            "name": "C2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 38,
            "end": 40,
            "name": "C2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 47,
        "end": 53,
        "value": "./m3",
        "raw": "\"./m3\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 115,
      "expression": {
        "type": "AssignmentExpression",
        "start": 55,
        "end": 114,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 55,
          "end": 80,
          "object": {
            "type": "TSTypeAssertion",
            "start": 56,
            "end": 74,
            "expression": {
              "type": "MemberExpression",
              "start": 61,
              "end": 74,
              "object": {
                "type": "Identifier",
                "start": 61,
                "end": 64,
                "name": "Cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 65,
                "end": 74,
                "name": "prototype",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 57,
              "end": 60
            }
          },
          "property": {
            "type": "Identifier",
            "start": 76,
            "end": 80,
            "name": "baz1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 83,
          "end": 114,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 176,
      "expression": {
        "type": "AssignmentExpression",
        "start": 116,
        "end": 175,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 116,
          "end": 141,
          "object": {
            "type": "TSTypeAssertion",
            "start": 117,
            "end": 135,
            "expression": {
              "type": "MemberExpression",
              "start": 122,
              "end": 135,
              "object": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
                "name": "Cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 126,
                "end": 135,
                "name": "prototype",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 118,
              "end": 121
            }
          },
          "property": {
            "type": "Identifier",
            "start": 137,
            "end": 141,
            "name": "baz2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 144,
          "end": 175,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 178,
      "end": 249,
      "id": {
        "type": "Literal",
        "start": 193,
        "end": 199,
        "value": "./m1",
        "raw": "\"./m1\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 200,
        "end": 249,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 206,
            "end": 247,
            "id": {
              "type": "Identifier",
              "start": 216,
              "end": 219,
              "name": "Cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 220,
              "end": 247,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 230,
                  "end": 241,
                  "key": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 234,
                    "name": "baz1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 236,
                    "end": 240,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 238,
                      "end": 240,
                      "typeName": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 240,
                        "name": "C1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 251,
      "end": 322,
      "id": {
        "type": "Literal",
        "start": 266,
        "end": 272,
        "value": "./m1",
        "raw": "\"./m1\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 273,
        "end": 322,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 279,
            "end": 320,
            "id": {
              "type": "Identifier",
              "start": 289,
              "end": 292,
              "name": "Cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 293,
              "end": 320,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 303,
                  "end": 314,
                  "key": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 307,
                    "name": "baz2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 309,
                    "end": 313,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 311,
                      "end": 313,
                      "typeName": {
                        "type": "Identifier",
                        "start": 311,
                        "end": 313,
                        "name": "C2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 168,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "Cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "Cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 26,
        "value": "./m1",
        "raw": "\"./m1\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 28,
      "end": 40,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 39,
        "value": "m2",
        "raw": "\"m2\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 41,
      "end": 53,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 52,
        "value": "m4",
        "raw": "\"m4\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 64,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 64,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 61,
                "end": 64,
                "typeName": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 64,
                  "name": "Cls",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 90,
      "expression": {
        "type": "CallExpression",
        "start": 66,
        "end": 89,
        "callee": {
          "type": "MemberExpression",
          "start": 66,
          "end": 87,
          "object": {
            "type": "CallExpression",
            "start": 66,
            "end": 73,
            "callee": {
              "type": "MemberExpression",
              "start": 66,
              "end": 71,
              "object": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 68,
                "end": 71,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 87,
            "name": "toExponential",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 113,
      "expression": {
        "type": "CallExpression",
        "start": 91,
        "end": 112,
        "callee": {
          "type": "MemberExpression",
          "start": 91,
          "end": 110,
          "object": {
            "type": "CallExpression",
            "start": 91,
            "end": 98,
            "callee": {
              "type": "MemberExpression",
              "start": 91,
              "end": 96,
              "object": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 93,
                "end": 96,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 99,
            "end": 110,
            "name": "toLowerCase",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 141,
      "expression": {
        "type": "CallExpression",
        "start": 114,
        "end": 140,
        "callee": {
          "type": "MemberExpression",
          "start": 114,
          "end": 138,
          "object": {
            "type": "MemberExpression",
            "start": 114,
            "end": 124,
            "object": {
              "type": "CallExpression",
              "start": 114,
              "end": 122,
              "callee": {
                "type": "MemberExpression",
                "start": 114,
                "end": 120,
                "object": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 120,
                  "name": "baz1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 138,
            "name": "toExponential",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 167,
      "expression": {
        "type": "CallExpression",
        "start": 142,
        "end": 166,
        "callee": {
          "type": "MemberExpression",
          "start": 142,
          "end": 164,
          "object": {
            "type": "MemberExpression",
            "start": 142,
            "end": 152,
            "object": {
              "type": "CallExpression",
              "start": 142,
              "end": 150,
              "callee": {
                "type": "MemberExpression",
                "start": 142,
                "end": 148,
                "object": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 148,
                  "name": "baz2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 153,
            "end": 164,
            "name": "toLowerCase",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
