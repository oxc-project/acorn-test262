__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 313,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 16,
      "end": 40,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 23,
        "end": 40,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 29,
            "end": 39,
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
              "left": {
                "type": "Literal",
                "start": 33,
                "end": 34,
                "value": 1,
                "raw": "1"
              },
              "operator": "+",
              "right": {
                "type": "ObjectExpression",
                "start": 37,
                "end": 39,
                "properties": []
              }
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 174,
      "end": 215,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 181,
        "end": 215,
        "id": {
          "type": "Identifier",
          "start": 191,
          "end": 196,
          "decorators": [],
          "name": "Aleph",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 197,
          "end": 215,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 203,
              "end": 213,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 204,
                "end": 212,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 206,
                  "end": 212
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 217,
      "end": 313,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 224,
        "end": 313,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
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
        "body": {
          "type": "ClassBody",
          "start": 251,
          "end": 313,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 257,
              "end": 274,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              },
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
                "value": "lol",
                "raw": "\"lol\""
              },
              "computed": false,
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
