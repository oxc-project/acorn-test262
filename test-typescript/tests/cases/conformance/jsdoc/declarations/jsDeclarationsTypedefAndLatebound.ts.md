__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 48,
  "end": 169,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 61,
            "decorators": [],
            "name": "LazySet",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 64,
            "end": 84,
            "arguments": [
              {
                "type": "Literal",
                "start": 72,
                "end": 83,
                "raw": "\"./LazySet\"",
                "value": "./LazySet",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 64,
              "end": 71,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 125,
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 128,
            "end": 137,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 167,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 139,
        "end": 166,
        "arguments": [
          {
            "type": "Identifier",
            "start": 156,
            "end": 165,
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 139,
          "end": 155,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 139,
            "end": 148,
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 149,
            "end": 155,
            "decorators": [],
            "name": "addAll",
            "optional": false,
            "typeAnnotation": null
          }
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 110,
  "end": 254,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 227,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 227,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 179,
            "end": 198,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 185,
              "decorators": [],
              "name": "addAll",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 185,
              "end": 198,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 196,
                "end": 198,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 186,
                  "end": 194,
                  "decorators": [],
                  "name": "iterable",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 203,
            "end": 225,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 204,
              "end": 219,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 204,
                "end": 210,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 211,
                "end": 219,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 220,
              "end": 225,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 223,
                "end": 225,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 116,
        "end": 123,
        "decorators": [],
        "name": "LazySet",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 229,
      "end": 254,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 229,
        "end": 253,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 229,
          "end": 243,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 229,
            "end": 235,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 236,
            "end": 243,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 246,
          "end": 253,
          "decorators": [],
          "name": "LazySet",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
