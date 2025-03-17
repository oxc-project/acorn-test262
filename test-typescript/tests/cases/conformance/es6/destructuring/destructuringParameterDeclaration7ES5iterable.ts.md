__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 233,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 18,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 38,
        "name": "ISomething",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 75,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 45,
            "end": 57,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 48,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 50,
                "end": 56
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 62,
            "end": 73,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 67,
                "end": 73
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
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 89,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 90,
          "end": 92,
          "properties": [],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "ObjectPattern",
          "start": 94,
          "end": 116,
          "properties": [
            {
              "type": "Property",
              "start": 95,
              "end": 98,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 95,
                "end": 98,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 95,
                "end": 98,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 100,
              "end": 103,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 100,
                "end": 103,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 100,
                "end": 103,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 116,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 106,
              "end": 116,
              "typeName": {
                "type": "Identifier",
                "start": 106,
                "end": 116,
                "name": "ISomething",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 118,
        "end": 120,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 122,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 134,
        "name": "baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 135,
          "end": 137,
          "elements": [],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "ObjectPattern",
          "start": 139,
          "end": 161,
          "properties": [
            {
              "type": "Property",
              "start": 140,
              "end": 143,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 140,
                "end": 143,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 140,
                "end": 143,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 145,
              "end": 148,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 145,
                "end": 148,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 145,
                "end": 148,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 149,
            "end": 161,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 151,
              "end": 161,
              "typeName": {
                "type": "Identifier",
                "start": 151,
                "end": 161,
                "name": "ISomething",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 163,
        "end": 165,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 167,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 179,
        "name": "one",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 180,
          "end": 182,
          "elements": [],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "ObjectPattern",
          "start": 184,
          "end": 186,
          "properties": [],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 190,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 192,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 204,
        "name": "two",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 205,
          "end": 207,
          "elements": [],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "ArrayPattern",
          "start": 209,
          "end": 228,
          "elements": [
            {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 218,
            "end": 228,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 220,
              "end": 228,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 220,
                "end": 226
              }
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 230,
        "end": 232,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
