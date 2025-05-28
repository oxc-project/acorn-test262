__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 316,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 64,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 78,
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 79,
        "end": 112,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 95,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 88,
                "end": 94
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 100,
            "end": 110,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 109,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 103,
                "end": 109
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 177,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 158,
        "end": 175,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 159,
          "end": 163,
          "typeName": {
            "type": "Identifier",
            "start": 159,
            "end": 163,
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "expression": {
          "type": "ObjectExpression",
          "start": 164,
          "end": 175,
          "properties": [
            {
              "type": "Property",
              "start": 166,
              "end": 173,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 169,
                "end": 173,
                "value": null,
                "raw": "null"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 218,
      "end": 249,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 219,
        "end": 247,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 220,
          "end": 224,
          "typeName": {
            "type": "Identifier",
            "start": 220,
            "end": 224,
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "expression": {
          "type": "ObjectExpression",
          "start": 225,
          "end": 247,
          "properties": [
            {
              "type": "Property",
              "start": 227,
              "end": 231,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 230,
                "end": 231,
                "value": 2,
                "raw": "2"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 233,
              "end": 245,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 236,
                "end": 245,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 316,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 297,
        "end": 314,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 298,
          "end": 302,
          "typeName": {
            "type": "Identifier",
            "start": 298,
            "end": 302,
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "expression": {
          "type": "ObjectExpression",
          "start": 303,
          "end": 314,
          "properties": [
            {
              "type": "Property",
              "start": 305,
              "end": 312,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 305,
                "end": 306,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 308,
                "end": 312,
                "value": null,
                "raw": "null"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
