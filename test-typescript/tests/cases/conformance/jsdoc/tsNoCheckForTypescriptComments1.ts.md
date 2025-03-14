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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 43,
        "end": 60,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 49,
            "end": 59,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "BinaryExpression",
              "start": 53,
              "end": 59,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 53,
                "end": 54,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "ObjectExpression",
                "start": 57,
                "end": 59,
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
      "start": 194,
      "end": 233,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 201,
        "end": 233,
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
              "key": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "q",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 222,
                "end": 230,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 224,
                  "end": 230
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 211,
          "end": 216,
          "decorators": [],
          "name": "Aleph",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 235,
      "end": 330,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 242,
        "end": 330,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 269,
          "end": 330,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 273,
              "end": 291,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 273,
                "end": 274,
                "decorators": [],
                "name": "q",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
                "raw": "'lol'",
                "value": "lol"
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 248,
          "end": 251,
          "decorators": [],
          "name": "Bet",
          "optional": false
        },
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
              "optional": false
            }
          }
        ],
        "superClass": null
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
