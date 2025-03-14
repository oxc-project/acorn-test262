__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 89,
  "end": 341,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 89,
      "end": 137,
      "body": {
        "type": "TSInterfaceBody",
        "start": 104,
        "end": 137,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 110,
            "end": 120,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 119,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 113,
                "end": 119
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 125,
            "end": 135,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 134,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 128,
                "end": 134
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 103,
        "decorators": [],
        "name": "IFoo",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 202,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 183,
        "end": 200,
        "expression": {
          "type": "ObjectExpression",
          "start": 189,
          "end": 200,
          "properties": [
            {
              "type": "Property",
              "start": 191,
              "end": 198,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 191,
                "end": 192,
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
                "start": 194,
                "end": 198,
                "raw": "null",
                "value": null
              }
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 184,
          "end": 188,
          "typeName": {
            "type": "Identifier",
            "start": 184,
            "end": 188,
            "decorators": [],
            "name": "IFoo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 243,
      "end": 274,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 244,
        "end": 272,
        "expression": {
          "type": "ObjectExpression",
          "start": 250,
          "end": 272,
          "properties": [
            {
              "type": "Property",
              "start": 252,
              "end": 256,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
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
                "start": 255,
                "end": 256,
                "raw": "2",
                "value": 2
              }
            },
            {
              "type": "Property",
              "start": 258,
              "end": 270,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 258,
                "end": 259,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 261,
                "end": 270,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 245,
          "end": 249,
          "typeName": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "decorators": [],
            "name": "IFoo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 341,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 322,
        "end": 339,
        "expression": {
          "type": "ObjectExpression",
          "start": 328,
          "end": 339,
          "properties": [
            {
              "type": "Property",
              "start": 330,
              "end": 337,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 330,
                "end": 331,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 333,
                "end": 337,
                "raw": "null",
                "value": null
              }
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 323,
          "end": 327,
          "typeName": {
            "type": "Identifier",
            "start": 323,
            "end": 327,
            "decorators": [],
            "name": "IFoo",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
