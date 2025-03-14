/a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "raw": "'./z'",
        "value": "./z"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 54,
            "end": 55,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 70,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 66,
          "end": 67,
          "exported": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 71,
      "end": 88,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 78,
        "end": 88,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 86,
          "end": 88,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 84,
          "end": 85,
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
      "start": 88,
      "end": 89
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
  "end": 108,
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
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 49,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 37,
                "end": 49,
                "exprName": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 49,
                  "decorators": [],
                  "name": "types",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 52,
            "end": 107,
            "properties": [
              {
                "type": "Property",
                "start": 56,
                "end": 75,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
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
                  "start": 59,
                  "end": 75,
                  "expression": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 68,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 72,
                    "end": 75
                  }
                }
              },
              {
                "type": "Property",
                "start": 85,
                "end": 104,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
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
                  "start": 88,
                  "end": 104,
                  "expression": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 97,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 101,
                    "end": 104
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
