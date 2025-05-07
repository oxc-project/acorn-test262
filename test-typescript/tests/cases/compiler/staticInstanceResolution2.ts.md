__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
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
      "start": 12,
      "end": 36,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 12,
        "end": 35,
        "arguments": [
          {
            "type": "Literal",
            "start": 29,
            "end": 34,
            "raw": "'foo'",
            "value": "foo",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 12,
          "end": 28,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 14,
            "end": 28,
            "decorators": [],
            "name": "hasOwnProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 71,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 71,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 69,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 63,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 69,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 69,
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
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "B",
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
      "start": 72,
      "end": 96,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 72,
        "end": 95,
        "arguments": [
          {
            "type": "Literal",
            "start": 89,
            "end": 94,
            "raw": "'foo'",
            "value": "foo",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 72,
          "end": 88,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 88,
            "decorators": [],
            "name": "hasOwnProperty",
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
