__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 33,
                "end": 34
              },
              "operator": "+",
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 37,
                "end": 39
              },
              "start": 33,
              "end": 39
            },
            "definite": false,
            "start": 29,
            "end": 39
          }
        ],
        "declare": false,
        "start": 23,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 16,
      "end": 40
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Aleph",
          "optional": false,
          "typeAnnotation": null,
          "start": 191,
          "end": 196
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 204
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 206,
                  "end": 212
                },
                "start": 204,
                "end": 212
              },
              "accessibility": null,
              "static": false,
              "start": 203,
              "end": 213
            }
          ],
          "start": 197,
          "end": 215
        },
        "declare": false,
        "start": 181,
        "end": 215
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 174,
      "end": 215
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bet",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 233
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Aleph",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 250
            },
            "typeArguments": null,
            "start": 245,
            "end": 250
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 258
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 260,
                  "end": 266
                },
                "start": 258,
                "end": 266
              },
              "value": {
                "type": "Literal",
                "value": "lol",
                "raw": "\"lol\"",
                "start": 269,
                "end": 274
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 257,
              "end": 274
            }
          ],
          "start": 251,
          "end": 313
        },
        "abstract": false,
        "declare": false,
        "start": 224,
        "end": 313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 217,
      "end": 313
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 16,
  "end": 313
}
```
