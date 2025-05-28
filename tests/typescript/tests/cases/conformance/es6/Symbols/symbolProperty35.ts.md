__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 58,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 19,
            "end": 56,
            "key": {
              "type": "MemberExpression",
              "start": 20,
              "end": 38,
              "object": {
                "type": "Identifier",
                "start": 20,
                "end": 26,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 27,
                "end": 38,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 43,
                "end": 56,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 45,
                    "end": 54,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 46,
                      "end": 54,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 48,
                        "end": 54
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 59,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 71,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 117,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 78,
            "end": 115,
            "key": {
              "type": "MemberExpression",
              "start": 79,
              "end": 97,
              "object": {
                "type": "Identifier",
                "start": 79,
                "end": 85,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 86,
                "end": 97,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 102,
                "end": 115,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 104,
                    "end": 113,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 105,
                      "end": 113,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 107,
                        "end": 113
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 119,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 131,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 140,
          "end": 142,
          "expression": {
            "type": "Identifier",
            "start": 140,
            "end": 142,
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 144,
          "end": 146,
          "expression": {
            "type": "Identifier",
            "start": 144,
            "end": 146,
            "decorators": [],
            "name": "I2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 147,
        "end": 150,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
