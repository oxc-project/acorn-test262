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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 23,
        "end": 40,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 29,
            "end": 39,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "Aleph",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                "name": "q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 217,
      "end": 313,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 224,
        "end": 313,
        "id": {
          "type": "Identifier",
          "start": 230,
          "end": 233,
          "name": "Bet",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 251,
          "end": 313,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 257,
              "end": 274,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "name": "q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 269,
                "end": 274,
                "value": "lol",
                "raw": "\"lol\""
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 245,
            "end": 250,
            "expression": {
              "type": "Identifier",
              "start": 245,
              "end": 250,
              "name": "Aleph",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
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
  "sourceType": "script",
  "hashbang": null
}
```
