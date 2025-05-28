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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 58,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 56,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 25,
              "end": 56,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 33,
                "decorators": [],
                "name": "Yep",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 36,
                "end": 55,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 38,
                    "end": 53,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 42,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                          "value": "foo.yep",
                          "raw": "\"foo.yep\""
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 60,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 73,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 74,
        "end": 118,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 78,
            "end": 116,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 85,
              "end": 116,
              "id": {
                "type": "Identifier",
                "start": 90,
                "end": 93,
                "decorators": [],
                "name": "Yep",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 96,
                "end": 115,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 98,
                    "end": 113,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 102,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                          "value": "bar.yep",
                          "raw": "\"bar.yep\""
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 150,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 149,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 136,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 138,
                  "end": 147,
                  "value": "wat.nup",
                  "raw": "\"wat.nup\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 185,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 184,
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
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 173,
                    "end": 180,
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
                    },
                    "typeArguments": null
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 228,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 227,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 204,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 206,
                      "end": 209,
                      "value": "a",
                      "raw": "\"a\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 219,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 221,
                      "end": 224,
                      "value": "b",
                      "raw": "\"b\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 264,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 263,
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
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 251,
                    "end": 258,
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
                    },
                    "typeArguments": null
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
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
