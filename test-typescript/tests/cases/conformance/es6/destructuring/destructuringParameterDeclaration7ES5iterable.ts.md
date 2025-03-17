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
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 75,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 45,
            "end": 57,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 48,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 50,
                "end": 56
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 62,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 67,
                "end": 73
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 38,
        "decorators": [],
        "name": "ISomething",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 120,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 118,
        "end": 120,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 89,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 90,
          "end": 92,
          "decorators": [],
          "optional": false,
          "properties": [],
          "typeAnnotation": null
        },
        {
          "type": "ObjectPattern",
          "start": 94,
          "end": 116,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 95,
              "end": 98,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 95,
                "end": 98,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 95,
                "end": 98,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 100,
              "end": 103,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 100,
                "end": 103,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 100,
                "end": 103,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 116,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 106,
              "end": 116,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 106,
                "end": 116,
                "decorators": [],
                "name": "ISomething",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 122,
      "end": 165,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 163,
        "end": 165,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 134,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 135,
          "end": 137,
          "decorators": [],
          "elements": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "ObjectPattern",
          "start": 139,
          "end": 161,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 140,
              "end": 143,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 140,
                "end": 143,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 140,
                "end": 143,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 145,
              "end": 148,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 145,
                "end": 148,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 145,
                "end": 148,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 149,
            "end": 161,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 151,
              "end": 161,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 151,
                "end": 161,
                "decorators": [],
                "name": "ISomething",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 167,
      "end": 190,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 190,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 179,
        "decorators": [],
        "name": "one",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 180,
          "end": 182,
          "decorators": [],
          "elements": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "ObjectPattern",
          "start": 184,
          "end": 186,
          "decorators": [],
          "optional": false,
          "properties": [],
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 192,
      "end": 232,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 230,
        "end": 232,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 204,
        "decorators": [],
        "name": "two",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 205,
          "end": 207,
          "decorators": [],
          "elements": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "ArrayPattern",
          "start": 209,
          "end": 228,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          ],
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
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
