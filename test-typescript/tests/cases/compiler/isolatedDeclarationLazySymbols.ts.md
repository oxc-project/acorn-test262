__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 313,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 26,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 26,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 38,
            "end": 113,
            "expression": {
              "type": "ObjectExpression",
              "start": 38,
              "end": 104,
              "properties": [
                {
                  "type": "Property",
                  "start": 44,
                  "end": 63,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "Literal",
                    "start": 45,
                    "end": 57,
                    "value": "prop.inner",
                    "raw": "\"prop.inner\""
                  },
                  "value": {
                    "type": "Literal",
                    "start": 60,
                    "end": 63,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 69,
                  "end": 102,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 73,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 75,
                    "end": 102,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 85,
                        "end": 95,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 90,
                          "name": "inner",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 92,
                          "end": 95,
                          "value": "b",
                          "raw": "\"b\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 113,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 113,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 141,
      "expression": {
        "type": "AssignmentExpression",
        "start": 115,
        "end": 140,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 115,
          "end": 135,
          "object": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 119,
            "end": 134,
            "object": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 121,
              "end": 133,
              "value": "prop.inner",
              "raw": "\"prop.inner\""
            },
            "computed": true,
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 137,
          "end": 140,
          "value": "A",
          "raw": "\"A\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 166,
      "expression": {
        "type": "AssignmentExpression",
        "start": 142,
        "end": 165,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 142,
          "end": 159,
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 145,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 146,
            "end": 158,
            "object": {
              "type": "MemberExpression",
              "start": 146,
              "end": 152,
              "object": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 148,
                "end": 152,
                "name": "prop",
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
              "end": 158,
              "name": "inner",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 162,
          "end": 165,
          "value": "B",
          "raw": "\"B\""
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 168,
      "end": 240,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 175,
        "end": 240,
        "id": {
          "type": "Identifier",
          "start": 181,
          "end": 184,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 185,
          "end": 240,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 191,
              "end": 238,
              "static": false,
              "computed": true,
              "key": {
                "type": "MemberExpression",
                "start": 192,
                "end": 207,
                "object": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 194,
                  "end": 206,
                  "value": "prop.inner",
                  "raw": "\"prop.inner\""
                },
                "computed": true,
                "optional": false
              },
              "value": {
                "type": "AssignmentExpression",
                "start": 210,
                "end": 238,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 210,
                  "end": 232,
                  "object": {
                    "type": "Literal",
                    "start": 210,
                    "end": 213,
                    "value": "A",
                    "raw": "\"A\""
                  },
                  "property": {
                    "type": "MemberExpression",
                    "start": 219,
                    "end": 231,
                    "object": {
                      "type": "MemberExpression",
                      "start": 219,
                      "end": 225,
                      "object": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 225,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 231,
                      "name": "inner",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 235,
                  "end": 238,
                  "value": "B",
                  "raw": "\"B\""
                }
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
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
      "start": 242,
      "end": 313,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 249,
        "end": 313,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 253,
            "end": 313,
            "id": {
              "type": "Identifier",
              "start": 253,
              "end": 255,
              "name": "oo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 258,
              "end": 313,
              "properties": [
                {
                  "type": "Property",
                  "start": 264,
                  "end": 285,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 265,
                    "end": 280,
                    "object": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 266,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 267,
                      "end": 279,
                      "value": "prop.inner",
                      "raw": "'prop.inner'"
                    },
                    "computed": true,
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 282,
                    "end": 285,
                    "value": "A",
                    "raw": "\"A\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 291,
                  "end": 310,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 292,
                    "end": 304,
                    "object": {
                      "type": "MemberExpression",
                      "start": 292,
                      "end": 298,
                      "object": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 293,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 294,
                        "end": 298,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 304,
                      "name": "inner",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 307,
                    "end": 310,
                    "value": "B",
                    "raw": "\"B\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
