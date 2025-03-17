__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 36,
  "end": 331,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 36,
      "end": 60,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 43,
        "end": 60,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 49,
            "end": 59,
            "id": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          "name": "Aleph",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                "name": "q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 235,
      "end": 330,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 242,
        "end": 330,
        "id": {
          "type": "Identifier",
          "start": 248,
          "end": 251,
          "name": "Bet",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 269,
          "end": 330,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 273,
              "end": 291,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 273,
                "end": 274,
                "name": "q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 285,
                "end": 290,
                "value": "lol",
                "raw": "'lol'"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 263,
            "end": 268,
            "expression": {
              "type": "Identifier",
              "start": 263,
              "end": 268,
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
