file.ts
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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 61,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 60,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "BinaryExpression",
              "start": 54,
              "end": 60,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 54,
                "end": 55,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "ObjectExpression",
                "start": 58,
                "end": 60,
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
      "start": 195,
      "end": 236,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 202,
        "end": 236,
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
              "key": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "q",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 225,
                "end": 233,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 227,
                  "end": 233
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 212,
          "end": 217,
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
      "start": 238,
      "end": 334,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 245,
        "end": 334,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 272,
          "end": 334,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 278,
              "end": 295,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 278,
                "end": 279,
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
                "start": 279,
                "end": 287,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 281,
                  "end": 287
                }
              },
              "value": {
                "type": "Literal",
                "start": 290,
                "end": 295,
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
          "start": 251,
          "end": 254,
          "decorators": [],
          "name": "Bet",
          "optional": false
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 266,
            "end": 271,
            "expression": {
              "type": "Identifier",
              "start": 266,
              "end": 271,
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
  "sourceType": "script"
}
```
