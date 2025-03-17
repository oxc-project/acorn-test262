__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "Abcde",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "Abcde",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 30,
        "value": "./test",
        "raw": "\"./test\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 33,
      "end": 92,
      "id": {
        "type": "Literal",
        "start": 48,
        "end": 56,
        "value": "./test",
        "raw": "\"./test\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 57,
        "end": 92,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 61,
            "end": 90,
            "id": {
              "type": "Identifier",
              "start": 71,
              "end": 76,
              "name": "Abcde",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 77,
              "end": 90,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 79,
                  "end": 88,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 82,
                      "end": 88
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 108,
      "expression": {
        "type": "MemberExpression",
        "start": 94,
        "end": 107,
        "object": {
          "type": "NewExpression",
          "start": 94,
          "end": 105,
          "callee": {
            "type": "Identifier",
            "start": 98,
            "end": 103,
            "name": "Abcde",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 206,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 232,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 220,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 215,
                "end": 220,
                "typeName": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 220,
                  "name": "Abcde",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 223,
            "end": 232,
            "properties": [
              {
                "type": "Property",
                "start": 225,
                "end": 230,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 226,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 228,
                  "end": 230,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
