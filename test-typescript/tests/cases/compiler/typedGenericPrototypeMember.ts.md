__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 37,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 37,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 35,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 35,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 35,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 30,
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 29,
                      "end": 30,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 29,
                        "end": 30,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 65,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 39,
        "end": 64,
        "arguments": [
          {
            "type": "Literal",
            "start": 58,
            "end": 63,
            "raw": "\"abc\"",
            "value": "abc",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 39,
          "end": 57,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 39,
            "end": 53,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 39,
              "end": 43,
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 44,
              "end": 53,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 54,
            "end": 57,
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
