__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 20,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "start": 58,
  "end": 211,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 58,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 66,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 69,
        "end": 111,
        "expression": {
          "type": "Literal",
          "start": 77,
          "end": 110,
          "raw": "'moduleAliasAsFunctionArgument_0'",
          "value": "moduleAliasAsFunctionArgument_0",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 114,
      "end": 149,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 149,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 125,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 126,
          "end": 144,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 129,
            "end": 144,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 131,
              "end": 144,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 133,
                  "end": 142,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 136,
                      "end": 142
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 151,
      "end": 155,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 151,
        "end": 154,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 151,
          "end": 152,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 153,
          "end": 154,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 168,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 162,
        "end": 167,
        "arguments": [
          {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 162,
          "end": 164,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
