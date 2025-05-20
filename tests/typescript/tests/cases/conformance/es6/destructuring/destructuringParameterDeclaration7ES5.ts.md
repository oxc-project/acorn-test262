__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 214,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 57,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 57,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 27,
            "end": 39,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
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
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 44,
            "end": 55,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
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
              "start": 47,
              "end": 55,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 49,
                "end": 55
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
        "end": 20,
        "decorators": [],
        "name": "ISomething",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 102,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 102,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 71,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 72,
          "end": 74,
          "decorators": [],
          "optional": false,
          "properties": [],
          "typeAnnotation": null
        },
        {
          "type": "ObjectPattern",
          "start": 76,
          "end": 98,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 77,
              "end": 80,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 77,
                "end": 80,
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
                "start": 77,
                "end": 80,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 82,
              "end": 85,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 82,
                "end": 85,
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
                "start": 82,
                "end": 85,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 98,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 98,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 98,
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
      "start": 104,
      "end": 147,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 145,
        "end": 147,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 116,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 117,
          "end": 119,
          "decorators": [],
          "elements": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "ObjectPattern",
          "start": 121,
          "end": 143,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 122,
              "end": 125,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
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
                "start": 122,
                "end": 125,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 127,
              "end": 130,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 127,
                "end": 130,
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
                "start": 127,
                "end": 130,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 131,
            "end": 143,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 133,
              "end": 143,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 133,
                "end": 143,
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
      "start": 149,
      "end": 172,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 170,
        "end": 172,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 161,
        "decorators": [],
        "name": "one",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 162,
          "end": 164,
          "decorators": [],
          "elements": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "ObjectPattern",
          "start": 166,
          "end": 168,
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
      "start": 174,
      "end": 214,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 212,
        "end": 214,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 186,
        "decorators": [],
        "name": "two",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 187,
          "end": 189,
          "decorators": [],
          "elements": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "ArrayPattern",
          "start": 191,
          "end": 210,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 200,
            "end": 210,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 202,
              "end": 210,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
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
