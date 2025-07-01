__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "LazySet",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 61
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 71
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./LazySet",
                "raw": "\"./LazySet\"",
                "start": 72,
                "end": 83
              }
            ],
            "optional": false,
            "start": 64,
            "end": 84
          },
          "definite": false,
          "start": 54,
          "end": 84
        }
      ],
      "declare": false,
      "start": 48,
      "end": 85
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 125
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 137
          },
          "definite": false,
          "start": 116,
          "end": 137
        }
      ],
      "declare": false,
      "start": 110,
      "end": 138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 148
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "addAll",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 155
          },
          "optional": false,
          "computed": false,
          "start": 139,
          "end": 155
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 165
          }
        ],
        "optional": false,
        "start": 139,
        "end": 166
      },
      "directive": null,
      "start": 139,
      "end": 167
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 48,
  "end": 169
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LazySet",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 123
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 185
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 194
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 196,
                "end": 198
              },
              "expression": false,
              "start": 185,
              "end": 198
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 179,
            "end": 198
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 210
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 219
              },
              "optional": false,
              "computed": false,
              "start": 204,
              "end": 219
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 223,
                "end": 225
              },
              "expression": false,
              "start": 220,
              "end": 225
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 203,
            "end": 225
          }
        ],
        "start": 124,
        "end": 227
      },
      "abstract": false,
      "declare": false,
      "start": 110,
      "end": 227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 235
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 243
          },
          "optional": false,
          "computed": false,
          "start": 229,
          "end": 243
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "LazySet",
          "optional": false,
          "typeAnnotation": null,
          "start": 246,
          "end": 253
        },
        "start": 229,
        "end": 253
      },
      "directive": null,
      "start": 229,
      "end": 254
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 110,
  "end": 254
}
```
