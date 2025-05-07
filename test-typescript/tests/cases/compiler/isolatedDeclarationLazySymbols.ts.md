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
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 26,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 26,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
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
                  "computed": true,
                  "key": {
                    "type": "Literal",
                    "start": 45,
                    "end": 57,
                    "raw": "\"prop.inner\"",
                    "value": "prop.inner",
                    "regex": null,
                    "bigint": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 60,
                    "end": 63,
                    "raw": "\"a\"",
                    "value": "a",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 69,
                  "end": 102,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 73,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectExpression",
                    "start": 75,
                    "end": 102,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 85,
                        "end": 95,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 90,
                          "decorators": [],
                          "name": "inner",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 92,
                          "end": 95,
                          "raw": "\"b\"",
                          "value": "b",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 113,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 113,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 141,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 115,
        "end": 140,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 115,
          "end": 135,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 119,
            "end": 134,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 121,
              "end": 133,
              "raw": "\"prop.inner\"",
              "value": "prop.inner",
              "regex": null,
              "bigint": null
            }
          }
        },
        "right": {
          "type": "Literal",
          "start": 137,
          "end": 140,
          "raw": "\"A\"",
          "value": "A",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 166,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 142,
        "end": 165,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 142,
          "end": 159,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 145,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 146,
            "end": 158,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 146,
              "end": 152,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 148,
                "end": 152,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 153,
              "end": 158,
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "Literal",
          "start": 162,
          "end": 165,
          "raw": "\"B\"",
          "value": "B",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 168,
      "end": 240,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 175,
        "end": 240,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 185,
          "end": 240,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 191,
              "end": 238,
              "accessibility": null,
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "MemberExpression",
                "start": 192,
                "end": 207,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 194,
                  "end": 206,
                  "raw": "\"prop.inner\"",
                  "value": "prop.inner",
                  "regex": null,
                  "bigint": null
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
                  "computed": true,
                  "object": {
                    "type": "Literal",
                    "start": 210,
                    "end": 213,
                    "raw": "\"A\"",
                    "value": "A",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "property": {
                    "type": "MemberExpression",
                    "start": 219,
                    "end": 231,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 219,
                      "end": 225,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 225,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 231,
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 235,
                  "end": 238,
                  "raw": "\"B\"",
                  "value": "B",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          ]
        },
        "declare": false,
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
      "start": 242,
      "end": 313,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 249,
        "end": 313,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 253,
            "end": 313,
            "definite": false,
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
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 265,
                    "end": 280,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 266,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 267,
                      "end": 279,
                      "raw": "'prop.inner'",
                      "value": "prop.inner",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 282,
                    "end": 285,
                    "raw": "\"A\"",
                    "value": "A",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 291,
                  "end": 310,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 292,
                    "end": 304,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 292,
                      "end": 298,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 293,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 294,
                        "end": 298,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 304,
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 307,
                    "end": 310,
                    "raw": "\"B\"",
                    "value": "B",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "let"
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
