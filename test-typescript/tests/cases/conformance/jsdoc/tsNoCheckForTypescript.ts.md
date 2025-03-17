__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 314,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 16,
      "end": 40,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 23,
        "end": 40,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 29,
            "end": 39,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "BinaryExpression",
              "start": 33,
              "end": 39,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 33,
                "end": 34,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "ObjectExpression",
                "start": 37,
                "end": 39,
                "properties": []
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
      "start": 174,
      "end": 215,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 181,
        "end": 215,
        "body": {
          "type": "TSInterfaceBody",
          "start": 197,
          "end": 215,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 203,
              "end": 213,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 204,
                "end": 212,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 206,
                  "end": 212
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 191,
          "end": 196,
          "decorators": [],
          "name": "Aleph",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 217,
      "end": 313,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 224,
        "end": 313,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 251,
          "end": 313,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 257,
              "end": 274,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 258,
                "end": 266,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 260,
                  "end": 266
                }
              },
              "value": {
                "type": "Literal",
                "start": 269,
                "end": 274,
                "raw": "\"lol\"",
                "value": "lol"
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 230,
          "end": 233,
          "decorators": [],
          "name": "Bet",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 245,
            "end": 250,
            "expression": {
              "type": "Identifier",
              "start": 245,
              "end": 250,
              "decorators": [],
              "name": "Aleph",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
