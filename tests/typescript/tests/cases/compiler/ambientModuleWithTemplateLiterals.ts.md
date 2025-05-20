__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 285,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 249,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 249,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 25,
            "end": 91,
            "body": {
              "type": "TSEnumBody",
              "start": 34,
              "end": 91,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 44,
                  "end": 51,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": {
                    "type": "TemplateLiteral",
                    "start": 48,
                    "end": 51,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 48,
                        "end": 51,
                        "tail": true,
                        "value": {
                          "cooked": "1",
                          "raw": "1"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "TSEnumMember",
                  "start": 61,
                  "end": 68,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 65,
                    "end": 68,
                    "raw": "'2'",
                    "value": "2"
                  }
                },
                {
                  "type": "TSEnumMember",
                  "start": 78,
                  "end": 85,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 82,
                    "end": 85,
                    "raw": "'3'",
                    "value": "3"
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 97,
            "end": 123,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 104,
              "end": 123,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 110,
                  "end": 122,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 114,
                    "end": 122,
                    "raw": "'string'",
                    "value": "string"
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 128,
            "end": 156,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 135,
              "end": 156,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 141,
                  "end": 155,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "TemplateLiteral",
                    "start": 145,
                    "end": 155,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 145,
                        "end": 155,
                        "tail": true,
                        "value": {
                          "cooked": "template",
                          "raw": "template"
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 162,
            "end": 185,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 169,
              "end": 185,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 175,
                  "end": 184,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 176,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 179,
                    "end": 184,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 182,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 184,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 190,
            "end": 216,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 197,
              "end": 216,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 203,
                  "end": 215,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 207,
                    "end": 215,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 210,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 211,
                      "end": 214,
                      "raw": "'b'",
                      "value": "b"
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 221,
            "end": 247,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 228,
              "end": 247,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 234,
                  "end": 246,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 238,
                    "end": 246,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 241,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "TemplateLiteral",
                      "start": 242,
                      "end": 245,
                      "expressions": [],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 242,
                          "end": 245,
                          "tail": true,
                          "value": {
                            "cooked": "c",
                            "raw": "c"
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 251,
      "end": 257,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 251,
        "end": 256,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 251,
          "end": 254,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 255,
          "end": 256,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 258,
      "end": 264,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 258,
        "end": 263,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 258,
          "end": 261,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 262,
          "end": 263,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 265,
      "end": 271,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 265,
        "end": 270,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 265,
          "end": 268,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 269,
          "end": 270,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 272,
      "end": 278,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 272,
        "end": 277,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 272,
          "end": 275,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 276,
          "end": 277,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 279,
      "end": 285,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 279,
        "end": 284,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 279,
          "end": 282,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 283,
          "end": 284,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
