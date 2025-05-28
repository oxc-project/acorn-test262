__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 36,
  "end": 330,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 36,
      "end": 60,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 43,
        "end": 60,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 49,
            "end": 59,
            "id": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "BinaryExpression",
              "start": 53,
              "end": 59,
              "left": {
                "type": "Literal",
                "start": 53,
                "end": 54,
                "value": 1,
                "raw": "1"
              },
              "operator": "+",
              "right": {
                "type": "ObjectExpression",
                "start": 57,
                "end": 59,
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
      "start": 194,
      "end": 233,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 201,
        "end": 233,
        "id": {
          "type": "Identifier",
          "start": 211,
          "end": 216,
          "decorators": [],
          "name": "Aleph",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 217,
          "end": 233,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 221,
              "end": 231,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 222,
                "end": 230,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 224,
                  "end": 230
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
      "start": 235,
      "end": 330,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 242,
        "end": 330,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 248,
          "end": 251,
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
            "start": 263,
            "end": 268,
            "expression": {
              "type": "Identifier",
              "start": 263,
              "end": 268,
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
          "start": 269,
          "end": 330,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 273,
              "end": 291,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 273,
                "end": 274,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 274,
                "end": 282,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 276,
                  "end": 282
                }
              },
              "value": {
                "type": "Literal",
                "start": 285,
                "end": 290,
                "value": "lol",
                "raw": "'lol'"
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
