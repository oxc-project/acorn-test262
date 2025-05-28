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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 26,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 113,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
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
                  "kind": "init",
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
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 69,
                  "end": 102,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 73,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 90,
                          "decorators": [],
                          "name": "inner",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 92,
                          "end": 95,
                          "value": "b",
                          "raw": "\"b\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
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
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "MemberExpression",
            "start": 119,
            "end": 134,
            "object": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 121,
              "end": 133,
              "value": "prop.inner",
              "raw": "\"prop.inner\""
            },
            "optional": false,
            "computed": true
          },
          "optional": false,
          "computed": true
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 148,
                "end": 152,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 153,
              "end": 158,
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "optional": false,
          "computed": true
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 181,
          "end": 184,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 185,
          "end": 240,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 191,
              "end": 238,
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "start": 192,
                "end": 207,
                "object": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 194,
                  "end": 206,
                  "value": "prop.inner",
                  "raw": "\"prop.inner\""
                },
                "optional": false,
                "computed": true
              },
              "typeAnnotation": null,
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
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 225,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 231,
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "optional": false,
                  "computed": true
                },
                "right": {
                  "type": "Literal",
                  "start": 235,
                  "end": 238,
                  "value": "B",
                  "raw": "\"B\""
                }
              },
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 242,
      "end": 313,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 249,
        "end": 313,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 253,
            "end": 313,
            "id": {
              "type": "Identifier",
              "start": 253,
              "end": 255,
              "decorators": [],
              "name": "oo",
              "optional": false,
              "typeAnnotation": null
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
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "start": 265,
                    "end": 280,
                    "object": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 266,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 267,
                      "end": 279,
                      "value": "prop.inner",
                      "raw": "'prop.inner'"
                    },
                    "optional": false,
                    "computed": true
                  },
                  "value": {
                    "type": "Literal",
                    "start": 282,
                    "end": 285,
                    "value": "A",
                    "raw": "\"A\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 291,
                  "end": 310,
                  "kind": "init",
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
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 294,
                        "end": 298,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 304,
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 307,
                    "end": 310,
                    "value": "B",
                    "raw": "\"B\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
