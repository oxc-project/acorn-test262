__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "EmptyStatement",
      "start": 17,
      "end": 18
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
  "start": 32,
  "end": 143,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 55,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 40,
          "end": 41,
          "imported": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 54,
        "value": "./f1",
        "raw": "\"./f1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 57,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 71,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 72,
        "end": 142,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 78,
            "end": 140,
            "id": {
              "type": "Identifier",
              "start": 88,
              "end": 93,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 93,
              "end": 96,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 94,
                  "end": 95,
                  "name": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 97,
              "end": 140,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 107,
                  "end": 134,
                  "key": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 123,
                    "decorators": [],
                    "name": "getCountAsString",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 125,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 127,
                      "end": 133
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
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
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
      "type": "ImportDeclaration",
      "start": 0,
      "end": 14,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 13,
        "value": "./f2",
        "raw": "\"./f2\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 28,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 24,
            "end": 27,
            "elements": [
              {
                "type": "Literal",
                "start": 25,
                "end": 26,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 72,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 37,
            "end": 71,
            "callee": {
              "type": "MemberExpression",
              "start": 37,
              "end": 69,
              "object": {
                "type": "CallExpression",
                "start": 37,
                "end": 57,
                "callee": {
                  "type": "MemberExpression",
                  "start": 37,
                  "end": 55,
                  "object": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 55,
                    "decorators": [],
                    "name": "getCountAsString",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 58,
                "end": 69,
                "decorators": [],
                "name": "toLowerCase",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
