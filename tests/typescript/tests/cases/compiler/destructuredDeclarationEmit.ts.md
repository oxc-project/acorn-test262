__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 17
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 19,
                  "end": 26
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 26
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 31
                },
                "value": {
                  "type": "Literal",
                  "value": "world",
                  "raw": "'world'",
                  "start": 33,
                  "end": 40
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 28,
                "end": 40
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bam",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 45
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bork",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 49,
                        "end": 53
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 57,
                              "end": 60
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "'a'",
                              "start": 62,
                              "end": 65
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 57,
                            "end": 65
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "baz",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 67,
                              "end": 70
                            },
                            "value": {
                              "type": "Literal",
                              "value": "b",
                              "raw": "'b'",
                              "start": 72,
                              "end": 75
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 67,
                            "end": 75
                          }
                        ],
                        "start": 55,
                        "end": 77
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 49,
                      "end": 77
                    }
                  ],
                  "start": 47,
                  "end": 79
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 42,
                "end": 79
              }
            ],
            "start": 12,
            "end": 81
          },
          "definite": false,
          "start": 6,
          "end": 81
        }
      ],
      "declare": false,
      "start": 0,
      "end": 82
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 95,
                      "end": 96
                    },
                    "start": 95,
                    "end": 96
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 98,
                      "end": 99
                    },
                    "start": 98,
                    "end": 99
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 101,
                      "end": 102
                    },
                    "start": 101,
                    "end": 102
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "'a'",
                          "start": 105,
                          "end": 108
                        },
                        "start": 105,
                        "end": 108
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "'b'",
                          "start": 110,
                          "end": 113
                        },
                        "start": 110,
                        "end": 113
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "c",
                          "raw": "'c'",
                          "start": 115,
                          "end": 118
                        },
                        "start": 115,
                        "end": 118
                      },
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "def",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 122,
                                  "end": 125
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "def",
                                      "raw": "'def'",
                                      "start": 127,
                                      "end": 132
                                    },
                                    "start": 127,
                                    "end": 132
                                  },
                                  "start": 125,
                                  "end": 132
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 122,
                                "end": 132
                              }
                            ],
                            "start": 121,
                            "end": 133
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "sec",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 136,
                                  "end": 139
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "sec",
                                      "raw": "'sec'",
                                      "start": 141,
                                      "end": 146
                                    },
                                    "start": 141,
                                    "end": 146
                                  },
                                  "start": 139,
                                  "end": 146
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 136,
                                "end": 146
                              }
                            ],
                            "start": 135,
                            "end": 147
                          }
                        ],
                        "start": 120,
                        "end": 148
                      }
                    ],
                    "start": 104,
                    "end": 149
                  }
                ],
                "start": 94,
                "end": 150
              },
              "start": 92,
              "end": 150
            },
            "start": 89,
            "end": 150
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 154,
                "end": 155
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 157,
                "end": 158
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 160,
                "end": 161
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 164,
                    "end": 167
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 169,
                    "end": 172
                  },
                  {
                    "type": "Literal",
                    "value": "c",
                    "raw": "'c'",
                    "start": 174,
                    "end": 177
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "def",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 181,
                              "end": 184
                            },
                            "value": {
                              "type": "Literal",
                              "value": "def",
                              "raw": "'def'",
                              "start": 186,
                              "end": 191
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 181,
                            "end": 191
                          }
                        ],
                        "start": 180,
                        "end": 192
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 195,
                              "end": 198
                            },
                            "value": {
                              "type": "Literal",
                              "value": "sec",
                              "raw": "'sec'",
                              "start": 200,
                              "end": 205
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 195,
                            "end": 205
                          }
                        ],
                        "start": 194,
                        "end": 206
                      }
                    ],
                    "start": 179,
                    "end": 207
                  }
                ],
                "start": 163,
                "end": 208
              }
            ],
            "start": 153,
            "end": 209
          },
          "definite": false,
          "start": 89,
          "end": 209
        }
      ],
      "declare": false,
      "start": 83,
      "end": 210
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 223
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 223
          },
          "exportKind": "value",
          "start": 220,
          "end": 223
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 228
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 228
          },
          "exportKind": "value",
          "start": 225,
          "end": 228
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 211,
      "end": 231
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 231
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 17
          },
          "importKind": "value",
          "start": 14,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./foo",
        "raw": "'./foo'",
        "start": 25,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "exportKind": "value",
          "start": 43,
          "end": 46
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 51
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 51
          },
          "exportKind": "value",
          "start": 48,
          "end": 51
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 34,
      "end": 54
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 67
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 72
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 64,
                "end": 72
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 77
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 77
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 74,
                "end": 77
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bam",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 82
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bork",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 90
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 94,
                              "end": 97
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ibar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 99,
                              "end": 103
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 94,
                            "end": 103
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "baz",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 105,
                              "end": 108
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ibaz",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 110,
                              "end": 114
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 105,
                            "end": 114
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 92,
                        "end": 116
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 86,
                      "end": 116
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 118
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 79,
                "end": 118
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 120
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 126
          },
          "definite": false,
          "start": 62,
          "end": 126
        }
      ],
      "declare": false,
      "start": 56,
      "end": 127
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 140
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 140
          },
          "exportKind": "value",
          "start": 137,
          "end": 140
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ibaz",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 146
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ibaz",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 146
          },
          "exportKind": "value",
          "start": 142,
          "end": 146
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 128,
      "end": 149
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              null,
              {
                "type": "Identifier",
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 164
              },
              null,
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  null,
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bee",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 174
                  },
                  null,
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      null,
                      {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 182,
                              "end": 185
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 182,
                              "end": 185
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 182,
                            "end": 185
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 181,
                        "end": 186
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 188
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 189
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 190
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 196
          },
          "definite": false,
          "start": 157,
          "end": 196
        }
      ],
      "declare": false,
      "start": 151,
      "end": 197
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 210
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 210
          },
          "exportKind": "value",
          "start": 207,
          "end": 210
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bee",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 215
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bee",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 215
          },
          "exportKind": "value",
          "start": 212,
          "end": 215
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "sec",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 220
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "sec",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 220
          },
          "exportKind": "value",
          "start": 217,
          "end": 220
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 198,
      "end": 223
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "getFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 237
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 256
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 258,
                    "end": 263
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 253,
                  "end": 263
                }
              ],
              "start": 247,
              "end": 265
            },
            "id": null,
            "generator": false,
            "start": 240,
            "end": 266
          },
          "definite": false,
          "start": 231,
          "end": 266
        }
      ],
      "declare": false,
      "start": 225,
      "end": 267
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 280
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 286
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 277,
                "end": 286
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 288
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 297
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 291,
            "end": 299
          },
          "definite": false,
          "start": 275,
          "end": 299
        }
      ],
      "declare": false,
      "start": 269,
      "end": 300
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 314
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 314
          },
          "exportKind": "value",
          "start": 310,
          "end": 314
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 301,
      "end": 317
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 317
}
```
