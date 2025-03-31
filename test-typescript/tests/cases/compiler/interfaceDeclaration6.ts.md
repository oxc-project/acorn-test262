__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 156,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 13,
        "name": "i1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
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
      "type": "EmptyStatement",
      "start": 30,
      "end": 31
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 44,
        "name": "i2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 53,
          "end": 55,
          "expression": {
            "type": "Identifier",
            "start": 53,
            "end": 55,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 56,
        "end": 72,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 70,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
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
      "type": "EmptyStatement",
      "start": 72,
      "end": 73
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 74,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 86,
        "name": "i3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 95,
          "end": 97,
          "expression": {
            "type": "Identifier",
            "start": 95,
            "end": 97,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 98,
        "end": 114,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 100,
            "end": 112,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 111,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 105,
                "end": 111
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
      "type": "EmptyStatement",
      "start": 114,
      "end": 115
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 116,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 128,
        "name": "i4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 129,
        "end": 156,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 132,
            "end": 142,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 135,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 141,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 138,
                "end": 141
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 144,
            "end": 154,
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 147,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 153,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 150,
                "end": 153
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
