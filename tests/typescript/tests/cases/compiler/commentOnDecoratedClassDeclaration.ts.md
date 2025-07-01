__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "decorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 26
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 30,
              "end": 36
            },
            "start": 28,
            "end": 36
          },
          "start": 27,
          "end": 36
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 39,
          "end": 42
        },
        "start": 37,
        "end": 42
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "decorator",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 81
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 82,
                "end": 89
              }
            ],
            "optional": false,
            "start": 72,
            "end": 90
          },
          "start": 71,
          "end": 90
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Remote",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 103
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 104,
        "end": 107
      },
      "abstract": false,
      "declare": false,
      "start": 71,
      "end": 107
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "decorator",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 148
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hi",
                "raw": "\"hi\"",
                "start": 149,
                "end": 153
              }
            ],
            "optional": false,
            "start": 139,
            "end": 154
          },
          "start": 138,
          "end": 154
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherRomote",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 174
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 192
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
                "start": 195,
                "end": 197
              },
              "expression": false,
              "start": 192,
              "end": 197
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 181,
            "end": 197
          }
        ],
        "start": 175,
        "end": 199
      },
      "abstract": false,
      "declare": false,
      "start": 138,
      "end": 199
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 199
}
```
