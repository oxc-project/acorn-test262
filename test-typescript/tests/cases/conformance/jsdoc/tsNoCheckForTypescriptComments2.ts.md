__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 335,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 61,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 61,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 60,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "BinaryExpression",
              "start": 54,
              "end": 60,
              "left": {
                "type": "Literal",
                "start": 54,
                "end": 55,
                "value": 1,
                "raw": "1"
              },
              "operator": "+",
              "right": {
                "type": "ObjectExpression",
                "start": 58,
                "end": 60,
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
      "start": 195,
      "end": 236,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 202,
        "end": 236,
        "id": {
          "type": "Identifier",
          "start": 212,
          "end": 217,
          "name": "Aleph",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 218,
          "end": 236,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 224,
              "end": 234,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "name": "q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 225,
                "end": 233,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 227,
                  "end": 233
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
      "start": 238,
      "end": 334,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 245,
        "end": 334,
        "id": {
          "type": "Identifier",
          "start": 251,
          "end": 254,
          "name": "Bet",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 272,
          "end": 334,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 278,
              "end": 295,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 278,
                "end": 279,
                "name": "q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 290,
                "end": 295,
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
                "start": 279,
                "end": 287,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 281,
                  "end": 287
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
            "start": 266,
            "end": 271,
            "expression": {
              "type": "Identifier",
              "start": 266,
              "end": 271,
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
