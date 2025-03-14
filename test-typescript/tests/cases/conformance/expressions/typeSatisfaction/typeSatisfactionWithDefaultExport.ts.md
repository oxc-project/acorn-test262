__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 32,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 32,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 30,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 33,
      "end": 65,
      "declaration": {
        "type": "TSSatisfiesExpression",
        "start": 48,
        "end": 64,
        "expression": {
          "type": "ObjectExpression",
          "start": 48,
          "end": 50,
          "properties": []
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 61,
          "end": 64,
          "typeName": {
            "type": "Identifier",
            "start": 61,
            "end": 64,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 32,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 32,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 30,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 33,
      "end": 71,
      "declaration": {
        "type": "TSSatisfiesExpression",
        "start": 48,
        "end": 70,
        "expression": {
          "type": "ObjectExpression",
          "start": 48,
          "end": 56,
          "properties": [
            {
              "type": "Property",
              "start": 50,
              "end": 54,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 53,
                "end": 54,
                "raw": "1",
                "value": 1
              }
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 67,
          "end": 70,
          "typeName": {
            "type": "Identifier",
            "start": 67,
            "end": 70,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
