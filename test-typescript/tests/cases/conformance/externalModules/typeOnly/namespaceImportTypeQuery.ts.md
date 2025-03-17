__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 10,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 11,
      "end": 29,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 25,
          "end": 26,
          "local": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 47,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 37,
        "end": 47,
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 45,
          "end": 47,
          "body": []
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
      "type": "EmptyStatement",
      "start": 47,
      "end": 48
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 242,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "name": "types",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "value": "./a",
        "raw": "'./a'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 51,
            "name": "A",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 37,
                "end": 51,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 44,
                  "end": 51,
                  "left": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 49,
                    "name": "types",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 74,
            "name": "B",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 60,
                "end": 74,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 67,
                  "end": 74,
                  "left": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 72,
                    "name": "types",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 241,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 96,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 84,
                "end": 96,
                "exprName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 96,
                  "name": "types",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 99,
            "end": 241,
            "properties": [
              {
                "type": "Property",
                "start": 196,
                "end": 215,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 199,
                  "end": 215,
                  "expression": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 208,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 212,
                    "end": 215
                  }
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 219,
                "end": 238,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 222,
                  "end": 238,
                  "expression": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 231,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 235,
                    "end": 238
                  }
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
