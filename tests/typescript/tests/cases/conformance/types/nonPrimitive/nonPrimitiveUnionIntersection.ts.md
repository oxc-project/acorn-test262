__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 16,
                    "end": 22
                  }
                ],
                "start": 7,
                "end": 22
              },
              "start": 5,
              "end": 22
            },
            "start": 4,
            "end": 22
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 25,
            "end": 27
          },
          "definite": false,
          "start": 4,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 45,
                    "end": 51
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 54,
                    "end": 60
                  }
                ],
                "start": 45,
                "end": 60
              },
              "start": 43,
              "end": 60
            },
            "start": 42,
            "end": 60
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 63,
            "end": 65
          },
          "definite": false,
          "start": 42,
          "end": 65
        }
      ],
      "declare": false,
      "start": 38,
      "end": 66
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 80,
                    "end": 86
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 89,
                    "end": 91
                  }
                ],
                "start": 80,
                "end": 91
              },
              "start": 78,
              "end": 91
            },
            "start": 77,
            "end": 91
          },
          "init": {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 94,
            "end": 97
          },
          "definite": false,
          "start": 77,
          "end": 97
        }
      ],
      "declare": false,
      "start": 73,
      "end": 98
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 109
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 113
        },
        "start": 108,
        "end": 113
      },
      "directive": null,
      "start": 108,
      "end": 114
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 125
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 129
        },
        "start": 124,
        "end": 129
      },
      "directive": null,
      "start": 124,
      "end": 130
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 149,
                    "end": 155
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 158,
                    "end": 160
                  }
                ],
                "start": 149,
                "end": 160
              },
              "start": 147,
              "end": 160
            },
            "start": 144,
            "end": 160
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
                  "start": 164,
                  "end": 167
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 169,
                  "end": 174
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 164,
                "end": 174
              }
            ],
            "start": 163,
            "end": 175
          },
          "definite": false,
          "start": 144,
          "end": 175
        }
      ],
      "declare": false,
      "start": 138,
      "end": 176
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 194,
                    "end": 200
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
                          "name": "err",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 204,
                          "end": 207
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 209,
                            "end": 215
                          },
                          "start": 207,
                          "end": 215
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 204,
                        "end": 215
                      }
                    ],
                    "start": 203,
                    "end": 216
                  }
                ],
                "start": 194,
                "end": 216
              },
              "start": 192,
              "end": 216
            },
            "start": 189,
            "end": 216
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
                  "start": 220,
                  "end": 223
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 225,
                  "end": 230
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 220,
                "end": 230
              }
            ],
            "start": 219,
            "end": 231
          },
          "definite": false,
          "start": 189,
          "end": 231
        }
      ],
      "declare": false,
      "start": 183,
      "end": 232
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 241
}
```
