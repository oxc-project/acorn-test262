__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 264,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 58,
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 58,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 56,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 25,
              "end": 56,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 33,
                "decorators": [],
                "name": "Yep",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 36,
                "end": 55,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 38,
                    "end": 53,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 42,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 42,
                      "end": 53,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 44,
                        "end": 53,
                        "literal": {
                          "type": "Literal",
                          "start": 44,
                          "end": 53,
                          "raw": "\"foo.yep\"",
                          "value": "foo.yep",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    }
                  }
                ]
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 60,
      "end": 118,
      "body": {
        "type": "TSModuleBlock",
        "start": 74,
        "end": 118,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 78,
            "end": 116,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 85,
              "end": 116,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 90,
                "end": 93,
                "decorators": [],
                "name": "Yep",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 96,
                "end": 115,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 98,
                    "end": 113,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 102,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 102,
                      "end": 113,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 104,
                        "end": 113,
                        "literal": {
                          "type": "Literal",
                          "start": 104,
                          "end": 113,
                          "raw": "\"bar.yep\"",
                          "value": "bar.yep",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    }
                  }
                ]
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 73,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 149,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 130,
            "end": 149,
            "properties": [
              {
                "type": "Property",
                "start": 132,
                "end": 147,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 136,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 138,
                  "end": 147,
                  "raw": "\"wat.nup\"",
                  "value": "wat.nup",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 180,
            "decorators": [],
            "name": "val1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 180,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 163,
                "end": 180,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 163,
                    "end": 170,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 163,
                      "end": 170,
                      "left": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 166,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 170,
                        "decorators": [],
                        "name": "Yep",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 173,
                    "end": 180,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 173,
                      "end": 180,
                      "left": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 176,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 180,
                        "decorators": [],
                        "name": "Yep",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 197,
            "end": 227,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 198,
                "end": 211,
                "properties": [
                  {
                    "type": "Property",
                    "start": 200,
                    "end": 209,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 204,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 206,
                      "end": 209,
                      "raw": "\"a\"",
                      "value": "a",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 213,
                "end": 226,
                "properties": [
                  {
                    "type": "Property",
                    "start": 215,
                    "end": 224,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 219,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 221,
                      "end": 224,
                      "raw": "\"b\"",
                      "value": "b",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 263,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 259,
            "decorators": [],
            "name": "val2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 239,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 241,
                "end": 259,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 242,
                    "end": 249,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 242,
                      "end": 249,
                      "left": {
                        "type": "Identifier",
                        "start": 242,
                        "end": 245,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 246,
                        "end": 249,
                        "decorators": [],
                        "name": "Yep",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 251,
                    "end": 258,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 251,
                      "end": 258,
                      "left": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 254,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 258,
                        "decorators": [],
                        "name": "Yep",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 262,
            "end": 263,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
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
