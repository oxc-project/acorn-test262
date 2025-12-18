__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Preferences",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 24
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "assignability",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 42
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": "no",
                "raw": "\"no\"",
                "start": 45,
                "end": 49
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 29,
              "end": 49
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 178
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
                  "start": 181,
                  "end": 183
                },
                "expression": false,
                "start": 178,
                "end": 183
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 167,
              "end": 183
            }
          ],
          "start": 25,
          "end": 185
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 185
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 185
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ooscope2",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 229
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 233
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 238
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 245
                },
                "optional": false,
                "computed": false,
                "start": 237,
                "end": 245
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 248,
                "end": 249
              },
              "start": 237,
              "end": 249
            },
            "id": null,
            "generator": false,
            "start": 232,
            "end": 249
          },
          "definite": false,
          "start": 221,
          "end": 249
        }
      ],
      "declare": false,
      "start": 217,
      "end": 249
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 249
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "Preferences",
    "start": 13,
    "end": 24,
    "range": [
      13,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "assignability",
    "start": 29,
    "end": 42,
    "range": [
      29,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "String",
    "value": "\"no\"",
    "start": 45,
    "end": 49,
    "range": [
      45,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 167,
    "end": 178,
    "range": [
      167,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 217,
    "end": 220,
    "range": [
      217,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "ooscope2",
    "start": 221,
    "end": 229,
    "range": [
      221,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 234,
    "end": 236,
    "range": [
      234,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 239,
    "end": 245,
    "range": [
      239,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  }
]
```
