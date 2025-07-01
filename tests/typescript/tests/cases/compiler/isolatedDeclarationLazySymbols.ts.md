__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 22,
          "end": 26
        },
        "expression": false,
        "start": 7,
        "end": 26
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 26
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "prop.inner",
                    "raw": "\"prop.inner\"",
                    "start": 45,
                    "end": 57
                  },
                  "value": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 60,
                    "end": 63
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 44,
                  "end": 63
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 73
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
                          "name": "inner",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 85,
                          "end": 90
                        },
                        "value": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 92,
                          "end": 95
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 85,
                        "end": 95
                      }
                    ],
                    "start": 75,
                    "end": 102
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 69,
                  "end": 102
                }
              ],
              "start": 38,
              "end": 104
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 113
              },
              "typeArguments": null,
              "start": 108,
              "end": 113
            },
            "start": 38,
            "end": 113
          },
          "definite": false,
          "start": 34,
          "end": 113
        }
      ],
      "declare": false,
      "start": 28,
      "end": 113
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 118
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "property": {
              "type": "Literal",
              "value": "prop.inner",
              "raw": "\"prop.inner\"",
              "start": 121,
              "end": 133
            },
            "optional": false,
            "computed": true,
            "start": 119,
            "end": 134
          },
          "optional": false,
          "computed": true,
          "start": 115,
          "end": 135
        },
        "right": {
          "type": "Literal",
          "value": "A",
          "raw": "\"A\"",
          "start": 137,
          "end": 140
        },
        "start": 115,
        "end": 140
      },
      "directive": null,
      "start": 115,
      "end": 141
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 145
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 147
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 152
              },
              "optional": false,
              "computed": false,
              "start": 146,
              "end": 152
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 158
            },
            "optional": false,
            "computed": false,
            "start": 146,
            "end": 158
          },
          "optional": false,
          "computed": true,
          "start": 142,
          "end": 159
        },
        "right": {
          "type": "Literal",
          "value": "B",
          "raw": "\"B\"",
          "start": 162,
          "end": 165
        },
        "start": 142,
        "end": 165
      },
      "directive": null,
      "start": 142,
      "end": 166
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 184
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 193
                },
                "property": {
                  "type": "Literal",
                  "value": "prop.inner",
                  "raw": "\"prop.inner\"",
                  "start": 194,
                  "end": 206
                },
                "optional": false,
                "computed": true,
                "start": 192,
                "end": 207
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 210,
                    "end": 213
                  },
                  "property": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 220
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 225
                      },
                      "optional": false,
                      "computed": false,
                      "start": 219,
                      "end": 225
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 231
                    },
                    "optional": false,
                    "computed": false,
                    "start": 219,
                    "end": 231
                  },
                  "optional": false,
                  "computed": true,
                  "start": 210,
                  "end": 232
                },
                "right": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 235,
                  "end": 238
                },
                "start": 210,
                "end": 238
              },
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 191,
              "end": 238
            }
          ],
          "start": 185,
          "end": 240
        },
        "abstract": false,
        "declare": false,
        "start": 175,
        "end": 240
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 168,
      "end": 240
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oo",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 255
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 266
                    },
                    "property": {
                      "type": "Literal",
                      "value": "prop.inner",
                      "raw": "'prop.inner'",
                      "start": 267,
                      "end": 279
                    },
                    "optional": false,
                    "computed": true,
                    "start": 265,
                    "end": 280
                  },
                  "value": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 282,
                    "end": 285
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 264,
                  "end": 285
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 292,
                        "end": 293
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 294,
                        "end": 298
                      },
                      "optional": false,
                      "computed": false,
                      "start": 292,
                      "end": 298
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 304
                    },
                    "optional": false,
                    "computed": false,
                    "start": 292,
                    "end": 304
                  },
                  "value": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 307,
                    "end": 310
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 291,
                  "end": 310
                }
              ],
              "start": 258,
              "end": 313
            },
            "definite": false,
            "start": 253,
            "end": 313
          }
        ],
        "declare": false,
        "start": 249,
        "end": 313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 242,
      "end": 313
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 313
}
```
