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
              "start": 50,
              "end": 51
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 54,
                "end": 55
              },
              "operator": "+",
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 58,
                "end": 60
              },
              "start": 54,
              "end": 60
            },
            "definite": false,
            "start": 50,
            "end": 60
          }
        ],
        "declare": false,
        "start": 44,
        "end": 61
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 61
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
          "start": 212,
          "end": 217
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
                "start": 224,
                "end": 225
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 227,
                  "end": 233
                },
                "start": 225,
                "end": 233
              },
              "accessibility": null,
              "static": false,
              "start": 224,
              "end": 234
            }
          ],
          "start": 218,
          "end": 236
        },
        "declare": false,
        "start": 202,
        "end": 236
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 195,
      "end": 236
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
          "start": 251,
          "end": 254
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
              "start": 266,
              "end": 271
            },
            "typeArguments": null,
            "start": 266,
            "end": 271
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
                "start": 278,
                "end": 279
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 281,
                  "end": 287
                },
                "start": 279,
                "end": 287
              },
              "value": {
                "type": "Literal",
                "value": "lol",
                "raw": "\"lol\"",
                "start": 290,
                "end": 295
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 278,
              "end": 295
            }
          ],
          "start": 272,
          "end": 334
        },
        "abstract": false,
        "declare": false,
        "start": 245,
        "end": 334
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 238,
      "end": 334
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 37,
  "end": 334
}
```
