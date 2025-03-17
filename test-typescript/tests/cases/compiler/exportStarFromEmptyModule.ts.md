__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 32,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 32,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 30,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "r",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
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
  "start": 9,
  "end": 9,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 52,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 51,
        "value": "./exportStarFromEmptyModule_module2",
        "raw": "\"./exportStarFromEmptyModule_module2\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 53,
      "end": 105,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 104,
        "value": "./exportStarFromEmptyModule_module1",
        "raw": "\"./exportStarFromEmptyModule_module1\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 139,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 114,
        "end": 139,
        "id": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 122,
          "end": 139,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 128,
              "end": 137,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "name": "q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
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
  "end": 92,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 57,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 56,
        "value": "./exportStarFromEmptyModule_module3",
        "raw": "\"./exportStarFromEmptyModule_module3\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 68,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 65,
                "end": 68,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 65,
                  "end": 68,
                  "left": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 76,
      "expression": {
        "type": "MemberExpression",
        "start": 70,
        "end": 75,
        "object": {
          "type": "MemberExpression",
          "start": 70,
          "end": 73,
          "object": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 74,
          "end": 75,
          "name": "q",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 83,
      "expression": {
        "type": "MemberExpression",
        "start": 77,
        "end": 82,
        "object": {
          "type": "MemberExpression",
          "start": 77,
          "end": 80,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "name": "r",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
