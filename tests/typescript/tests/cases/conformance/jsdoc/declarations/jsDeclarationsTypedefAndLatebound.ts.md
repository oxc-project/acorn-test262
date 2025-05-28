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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 84,
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
            "callee": {
              "type": "Identifier",
              "start": 64,
              "end": 71,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 72,
                "end": 83,
                "value": "./LazySet",
                "raw": "\"./LazySet\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 138,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 137,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 167,
      "expression": {
        "type": "CallExpression",
        "start": 139,
        "end": 166,
        "callee": {
          "type": "MemberExpression",
          "start": 139,
          "end": 155,
          "object": {
            "type": "Identifier",
            "start": 139,
            "end": 148,
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 149,
            "end": 155,
            "decorators": [],
            "name": "addAll",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 227,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 179,
            "end": 198,
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
            "value": {
              "type": "FunctionExpression",
              "start": 185,
              "end": 198,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 196,
                "end": 198,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 203,
            "end": 225,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 204,
              "end": 219,
              "object": {
                "type": "Identifier",
                "start": 204,
                "end": 210,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 211,
                "end": 219,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 220,
              "end": 225,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 223,
                "end": 225,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 229,
      "end": 254,
      "expression": {
        "type": "AssignmentExpression",
        "start": 229,
        "end": 253,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 229,
          "end": 243,
          "object": {
            "type": "Identifier",
            "start": 229,
            "end": 235,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 236,
            "end": 243,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
