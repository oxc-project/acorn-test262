/a.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 11,
      "end": 29,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 25,
          "end": 26,
          "exported": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 47,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 37,
        "end": 47,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 45,
          "end": 47,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "decorators": [],
          "name": "B",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "EmptyStatement",
      "start": 47,
      "end": 48
    }
  ],
  "sourceType": "module"
}
```
/b.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "types",
            "optional": false
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 51,
            "decorators": [],
            "name": "A",
            "optional": false,
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
                    "decorators": [],
                    "name": "types",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 74,
            "decorators": [],
            "name": "B",
            "optional": false,
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
                    "decorators": [],
                    "name": "types",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 96,
            "decorators": [],
            "name": "t",
            "optional": false,
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
                  "decorators": [],
                  "name": "types",
                  "optional": false
                }
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "start": 199,
                  "end": 215,
                  "expression": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 208,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 212,
                    "end": 215
                  }
                }
              },
              {
                "type": "Property",
                "start": 219,
                "end": 238,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "start": 222,
                  "end": 238,
                  "expression": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 231,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 235,
                    "end": 238
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module"
}
```
