__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 303,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 32,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 32,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 29,
                "end": 32
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 43,
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 46,
            "end": 88,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 52,
              "end": 88,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 58,
                  "end": 86,
                  "accessibility": null,
                  "computed": true,
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "start": 66,
                    "end": 80,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 72,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 80,
                      "decorators": [],
                      "name": "dispose",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 81,
                    "end": 86,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 84,
                      "end": 86,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "using"
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 162,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 99,
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 102,
            "end": 162,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 108,
              "end": 162,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 114,
                  "end": 127,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "start": 125,
                    "end": 126,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 132,
                  "end": 160,
                  "accessibility": null,
                  "computed": true,
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "start": 140,
                    "end": 154,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 146,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 154,
                      "decorators": [],
                      "name": "dispose",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 155,
                    "end": 160,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 158,
                      "end": 160,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "using"
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 223,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 173,
            "decorators": [],
            "name": "C3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 176,
            "end": 223,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 187,
              "end": 223,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 193,
                  "end": 221,
                  "accessibility": null,
                  "computed": true,
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "start": 201,
                    "end": 215,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 201,
                      "end": 207,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 215,
                      "decorators": [],
                      "name": "dispose",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 216,
                    "end": 221,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 219,
                      "end": 221,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 176,
                "end": 180,
                "expression": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 180,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "id": null,
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "using"
    },
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 303,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 302,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 234,
            "decorators": [],
            "name": "C4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 237,
            "end": 302,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 248,
              "end": 302,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 254,
                  "end": 267,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 262,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "start": 265,
                    "end": 266,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 272,
                  "end": 300,
                  "accessibility": null,
                  "computed": true,
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "start": 280,
                    "end": 294,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 286,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 294,
                      "decorators": [],
                      "name": "dispose",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 295,
                    "end": 300,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 298,
                      "end": 300,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 237,
                "end": 241,
                "expression": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 241,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "id": null,
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "using"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
