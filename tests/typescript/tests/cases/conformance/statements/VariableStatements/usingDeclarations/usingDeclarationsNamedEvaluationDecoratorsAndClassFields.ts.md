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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 33,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 32,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 89,
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 88,
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
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 52,
              "end": 88,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 58,
                  "end": 86,
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "start": 66,
                    "end": 80,
                    "object": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 72,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 80,
                      "decorators": [],
                      "name": "dispose",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 81,
                    "end": 86,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 84,
                      "end": 86,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": true,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 163,
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 162,
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
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 108,
              "end": 162,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 114,
                  "end": 127,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "start": 125,
                    "end": 126,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 132,
                  "end": 160,
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "start": 140,
                    "end": 154,
                    "object": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 146,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 154,
                      "decorators": [],
                      "name": "dispose",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 155,
                    "end": 160,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 158,
                      "end": 160,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": true,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 224,
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 223,
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
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 187,
              "end": 223,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 193,
                  "end": 221,
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "start": 201,
                    "end": 215,
                    "object": {
                      "type": "Identifier",
                      "start": 201,
                      "end": 207,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 215,
                      "decorators": [],
                      "name": "dispose",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 216,
                    "end": 221,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 219,
                      "end": 221,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": true,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 303,
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 302,
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
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 248,
              "end": 302,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 254,
                  "end": 267,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 262,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "start": 265,
                    "end": 266,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 272,
                  "end": 300,
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "start": 280,
                    "end": 294,
                    "object": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 286,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 294,
                      "decorators": [],
                      "name": "dispose",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 295,
                    "end": 300,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 298,
                      "end": 300,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": true,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
